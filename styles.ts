import {StyleSheet} from 'react-native';

enum SIZES {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
}

const Dimensions = {
  [SIZES.XS]: 2,
  [SIZES.S]: 4,
  [SIZES.M]: 8,
  [SIZES.L]: 16,
  [SIZES.XL]: 32,
  [SIZES.XXL]: 64,
};

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
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
  input: {
    height: Dimensions[SIZES.XL],
    margin: Dimensions[SIZES.L],
    borderWidth: Dimensions[SIZES.XS],
    padding: Dimensions[SIZES.L],
  },
});
