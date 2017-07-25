import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem ,FormInput, GridRow, GridCol, Button} from 'framework7-react';

export const findmin = () => {
    return (
        <Page>
            <Navbar title="Findmin" backLink="Back" sliding />

            <List from>
            <ListItem>
							<FormInput name="Number1" placeholder="Number1" type="number" />
						</ListItem>
            <ListItem>
							<FormInput name="Number2" placeholder="Number2" type="number" />
						</ListItem>
            <ListItem>
							<FormInput name="Number3" placeholder="Number3" type="number" />
						</ListItem>
            <ListItem>
							<FormInput name="Number4" placeholder="Number4" type="number" />
						</ListItem>
            <ListItem>
							<FormInput name="Number5" placeholder="Number5" type="number" />
						</ListItem>
            <GridRow>
              <GridCol width={50}>
                <Button>Min</Button>
              </GridCol>
              </GridRow>
              <ListItem>
  							<FormInput name="Min" placeholder="Min" type="number" />
  						</ListItem>
            </List>
        </Page>
    );
};
