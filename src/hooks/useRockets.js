import { useQuery, gql } from "@apollo/client";

const GET_ROCKETS = gql`
  query GetRocket($id: ID!) {
    launch(id:$id){
      id
   mission_name
   launch_date_local
    rocket{
      rocket_name
      rocket{
        description
        wikipedia
        country
      }
    }
  }
  ships{
    image
  }
  }
`;

export const useRockets = (id) => {
  const { data, error, loading } = useQuery(GET_ROCKETS, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
