import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from 'react-native-paper'

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from '../../../utils/safe-area.component'
import { Search } from '../components/search.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return < RestaurantInfoCard restaurant={item} />
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
};
