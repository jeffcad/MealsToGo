import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from 'react-native-paper'

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from '../../../utils/safe-area.component'

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const SearchContainer = styled.View`
  padding: 16px;
`;

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
  const { isLoading, error, restaurants } = useContext(RestaurantsContext)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
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
