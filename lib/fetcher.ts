export default async function fetcher(args: any) {
  const response = await fetch(args);
  return response.json();
}
