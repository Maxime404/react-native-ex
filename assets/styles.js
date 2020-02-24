import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  view: {
    flex: 1,
    backgroundColor: "#676767",
    justifyContent: "center",
    alignItems: "center"
  },
  viewTop: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: "center"
  },
  viewBlockPink: {
    backgroundColor: "#F9429E",
    margin: 5,
    width: 200,
    height: 100
  },
  viewBlockRed: {
    backgroundColor: "red",
    margin: 5,
    width: 100,
    height: 100
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    height: 40
  },
  viewList: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  footer: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 60,
    paddingBottom: 20,
    left: 0,
    right: 0,
    bottom: 0
  },
  title: {
    fontSize: 60,
    color: "#000"
  },
  h2: {
    fontSize: 40,
    color: "#000"
  },
  text: {
    color: "#FFF"
  },
  img: {
    width: 200,
    height: 140
  },
  scrollView: {
    flex: 1
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  }
});