import { getLocationByName } from "../location-util";

export async function GET(req, { params }) {
  const { name } = params;

  const data = await getLocationByName(name);

  return Response.json(data);
}
