import * as React from "react";

import Layout from "../../../components/Layout";
import BlogRoll from "../../../components/BlogRoll";
import PageBanner from "../../../components/PageBanner";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MaxWidthContainer = styled.div`
  display: grid;
  position: relative;
  background-color: #f5f5f5;
  margin: 0 auto;
  padding: 48px 0;
  grid-template-columns: minmax(24px, auto) minmax(auto, 1300px) minmax(
      24px,
      auto
    );
  grid-template-areas:
    ". blog .";
`;
export default ({location}) => {
  const { t } = useTranslation();
    return (
      <Layout>
        <PageBanner location={location} title={t("client_cases")} />
        <MaxWidthContainer>
          <BlogRoll />
        </MaxWidthContainer>
      </Layout>
    );
  }
