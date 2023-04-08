
import Box from "./components/darkmode";
import TextColor from "./components/inputtextcolor";
import Names from "./components/peoplenames";
import BoxComponent from "./components/boxcomponent";
import Information from "./components/information";

const App = () => {

  return <div className='P-data'>
    <Box title={'title 1'} description={'description 1'}/>
    <Box title={'title 2'} />
    <TextColor/>
    <Names/>
    <BoxComponent/>
    <Information  title={'title 1'} description={'description 1'}/>

  </div>
}

export default App;
