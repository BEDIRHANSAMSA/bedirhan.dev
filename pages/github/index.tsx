export { default } from "./Github";

export async function getServerSideProps() {
  return {
    props: {},
    redirect: {
      permanent: true,
      destination: "https://github.com/BEDIRHANSAMSA",
    },
  };
}
