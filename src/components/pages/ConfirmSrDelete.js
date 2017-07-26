import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class ConfirmSrDelete extends React.Component {

  constructor(props){
    super(props);
    this.state = {worklog:'1234', solution:'12ab', detail:'abcd'}
  }
  submit = () => {
    var {worklog, solution, detail} = this.state;
    console.log(this.state);
  }

  render(){
      var {worklog, solution, detail} = this.state;
      return (
        <Page>
            <Navbar title="ConfirmSrDelete" backLink="Back" sliding />

            <ContentBlock inner>
              <Button fill style={pStyle} onClick={()=>this.submit()}>ยืนยันการลบ</Button>
            </ContentBlock>
        </Page>
    );
  }
};
