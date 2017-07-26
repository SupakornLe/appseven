import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';
const pStyle = {margin: '1em 0'};
export default class CaseStatusFormPending extends React.Component {

  constructor(props){
    super(props);
    this.state = {worklog:'', expectFinishPending:''}
  }
  submit = () => {
    var {worklog, expectFinishPending} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var {worklog, expectFinishPending} = this.state;
    if(worklog.length>3!="" && expectFinishPending.length>3!=""){
      return (<ContentBlock inner>
        <Button fill style={pStyle} onClick={()=>this.submit()}>Submit</Button>
      </ContentBlock>);
    }else {
      return <spam />
    }
  }

  render(){
      var {worklog, expectFinishPending} = this.state;
      return (
        <Page>
            <Navbar title="CaseStatusFormPending" backLink="Back" sliding />

              <List form>
                <ListItem>
                  <FormLabel>expect_finish_pending</FormLabel>
                  <FormInput type="datetime-local" onChange={(e)=>this.setState({expectFinishPending:e.target.value})} value={expectFinishPending} />>
                </ListItem>
                <ListItem>
                  <FormLabel>worklog</FormLabel>
                  <FormInput type="textarea" onKeyup={(e)=>this.setState({worklog:e.target.value})} value={worklog} />
                </ListItem>
            </List>
            {this.renderButtonSubmit()}
        </Page>
    );
  }
};
