import React  from 'react';
import {Page, ContentBlock, Navbar, List, ListItem ,FormInput, GridRow, GridCol, Button} from 'framework7-react';

export class findmin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Number1:0, Number2:0, Number3:0, Number4:0, Number5:0,result:0}
    }
      min=()=>{
        var {Number1,Number2,Number3,Number4,Number5,result} = this.state;

        var stringInput = Number1+","+Number2+","+Number3+","+Number4+","+Number5;

        var dataArray = stringInput.split(",");
        result = 99999999;

        for (var i = 0; i < dataArray.length; i++){
          if(parseInt(dataArray[i])<result) {
            result = dataArray[i];
          }
        }
        this.setState({result});
      }


  render() {
    return (
        <Page>
            <Navbar title="Findmin" backLink="Back" sliding />

            <List from>
            <ListItem>
							<FormInput placeholder="Number1" type="number" value={this.state.Number1}
                onChange={(e)=>this.setState({Number1:parseInt(e.target.value)})} />
						</ListItem>
            <ListItem>
							<FormInput placeholder="Number2" type="number" value={this.state.Number2}
                onChange={(e)=>this.setState({Number2:parseInt(e.target.value)})} />
						</ListItem>
            <ListItem>
							<FormInput placeholder="Number3" type="number" value={this.state.Number3}
                onChange={(e)=>this.setState({Number3:parseInt(e.target.value)})} />
						</ListItem>
            <ListItem>
            <FormInput placeholder="Number4" type="number" value={this.state.Number4}
              onChange={(e)=>this.setState({Number4:parseInt(e.target.value)})} />
						</ListItem>
            <ListItem>
            <FormInput placeholder="Number5" type="number" value={this.state.Number5}
              onChange={(e)=>this.setState({Number5:parseInt(e.target.value)})} />
						</ListItem>
            </List>
            <List from>
              <ListItem title={this.state.result}>
              </ListItem>
            </List>
            <GridRow>
                <Button big fill coler="blue" onClick={this.min}>Min</Button>
            </GridRow>
        </Page>
    );
  }
};
