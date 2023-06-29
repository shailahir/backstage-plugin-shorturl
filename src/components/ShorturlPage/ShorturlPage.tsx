/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import { Button, Grid } from "@material-ui/core";
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from "@backstage/core-components";
import { ShortUrlList } from "./ShortUrlList";

export const ShorturlPage = () => (
  <Page themeId="tool">
    <Header title="Welcome to shorturl!" subtitle="Shorten URLs and share">
      <HeaderLabel label="Maintainer" value="Shailendra Ahir" />
      <HeaderLabel label="Status" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="URL Shortener">
        <Button color="primary">Shorten URL</Button>
        {/* <Button color="secondary">Refresh</Button> */}
        <SupportButton>Contact for support</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ShortUrlList />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
