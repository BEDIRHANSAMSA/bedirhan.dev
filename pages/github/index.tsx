export { default } from "./Github";

export async function getStaticProps() {
  return {
    props: {},
    redirect: {
      permanent: true,
      destination: "https://github.com/BEDIRHANSAMSA",
    },
  };
}
