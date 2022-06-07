/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// 웹뷰는 실시간으로 고칠 수 있다. 
// 터미널 명령어
// To reload the app press "r"
// To open developer menu press "d"


import React from 'react';
import {
  SafeAreaView, // 아이폰 노치(탈모부분) 짤라내고 빼고 실제로 콘텐츠가 채워지는 부분을 만들어준다. 최상단을 감싼다.
  ScrollView, // 콘텐츠가 화면보다 넘치면 ScrollView을 사용해야 스크롤이된다. 하지만 성능 이슈가 있어 컴포넌트가 많으면 Flatlist를 사용해야한다.
  StatusBar, // 휴대폰 배터리 표시, 시간 표시 부분
  StyleSheet,
  Text, // span !!RN에서는 text가 있으면 Text으로 감싸야한다. View만쓰면 안됨
  useColorScheme,
  View, // div
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}; // 하나의 파일에 컴포넌트가 두개 방법은 지양한다. 파일로 분리하는 것을 추천한다.

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//RN에서 id를 부여해서 적용해준다. inline으로 스타일을 쓰는 것보다 성능이 좋다. but 드라마틱하게 좋지는 않음
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32, // px단위로 style을 주는 것이 아니다. dp - android 단위를 사용한다. 화면 비율에 따라 달라진다. % 와 다르다. 해상도가 같으면 화면이 같다. camal case를 사용한다.
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
