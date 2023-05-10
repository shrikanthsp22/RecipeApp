import { CONFIGS } from "../../configurations/config";
export async function getRecipes() {
  const defaultQuery = "pizza";
  const url = `${CONFIGS.recipes.url}?search=${defaultQuery}`;
  const response = await fetch(url);
  if (isValidResponse(response)) {
    return await response.json();
  } else {
    throw new Error("Something went wrong!");
  }
}

function isValidResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return true;
}
