import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longtitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      {/* info */}

      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today's Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at :{" "}
              {new Date(results.current_weather.time).toLocaleString()}(
              {results.timezone})
            </p>
          </div>

          <div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherPage;
