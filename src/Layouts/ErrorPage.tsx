import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <Flex id="error-page" direction={"column"}>
      <Heading>Oops!</Heading>
      <Heading>Sorry, an unexpected error has occurred.</Heading>
      <Heading>
        <i>{error.statusText || error.message}</i>
      </Heading>
    </Flex>
  );
}