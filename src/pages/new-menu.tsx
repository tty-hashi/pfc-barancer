import React from "react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../components/molecules/PageLayout";
import CardGridMyPage from "../components/templates/CardGridMyPage";

const NewMenu = () => {
  return (
    <PageLayout heading="New Menu" icon={faUtensils}>
      <CardGridMyPage />
    </PageLayout>
  );
};

export default NewMenu;
