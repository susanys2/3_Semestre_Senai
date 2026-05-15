// import { View } from 'react-native';
// import Aula01 from './src/components/Aula01';
// import Aula02 from './src/components/Aula02';
// import Aula03 from './src/components/Aula03';
// import { ScrollView } from 'react-native-web';

// export default function App() {
//     return (
//         <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
//             <Aula01/>
//             <Aula02/> 
//             <Aula03/>  
//         </ScrollView >
//     );
// }


import NavDrawer from "./src/pages/NavDrawer";  
import NavStack from "./src/pages/NavStack";  
import NavTopTabs from "./src/pages/NavTopTabs";
import NavBottomTabs from "./src/pages/NavBottomTabs";
export default function App() {
    return(
        //<NavDrawer/>
        <NavStack/>
        //<NavTopTabs/>
        //<NavBottomTabs/>
        
    )
}
