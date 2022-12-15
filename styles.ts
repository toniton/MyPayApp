import {StyleSheet} from 'react-native';

export enum SIZES {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
}

export const Dimensions = {
  [SIZES.XS]: 2,
  [SIZES.S]: 4,
  [SIZES.M]: 8,
  [SIZES.L]: 16,
  [SIZES.XL]: 32,
  [SIZES.XXL]: 64,
};

export enum VARIANTS {
  WHITE,
  BLACK,
  SURFACE_BG,
  SURFACE_TX,
  PRIMARY_BG,
  PRIMARY_TX,
  SECONDARY_BG,
  SECONDARY_TX,
}

export const Colors = {
  [VARIANTS.WHITE]: '#FFFFFF',
  [VARIANTS.BLACK]: '#000000',
  [VARIANTS.SURFACE_BG]: '#F4F4F4',
  [VARIANTS.SURFACE_TX]: '#353535',
  [VARIANTS.PRIMARY_BG]: '#000000',
  [VARIANTS.PRIMARY_TX]: '#FAFAFA',
  [VARIANTS.SECONDARY_TX]: '#70757a',
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
  flex: {
    flex: 1,
  },
  stretch: {
    flex: 1,
    alignItems: 'stretch',
  },
  container: {
    padding: Dimensions[SIZES.XL],
    justifyContent: 'center',
    backgroundColor: Colors[VARIANTS.SURFACE_BG],
  },
  section: {
    marginTop: Dimensions[SIZES.L],
    // paddingHorizontal: Dimensions[SIZES.XL],
  },
  title: {
    color: Colors[VARIANTS.SURFACE_TX],
    fontSize: Dimensions[SIZES.XL],
    marginBottom: Dimensions[SIZES.L],
  },
  label: {
    color: Colors[VARIANTS.SECONDARY_TX],
    fontSize: Dimensions[SIZES.L],
    marginBottom: Dimensions[SIZES.M],
  },
  input: {
    height: Dimensions[SIZES.XXL],
    borderWidth: Dimensions[SIZES.XS],
    borderColor: Colors[VARIANTS.SECONDARY_TX],
    padding: Dimensions[SIZES.L],
    backgroundColor: Colors[VARIANTS.WHITE],
    borderRadius: Dimensions[SIZES.L],
    color: Colors[VARIANTS.SURFACE_TX],
    fontSize: Dimensions[SIZES.L],
  },
  button: {
    height: Dimensions[SIZES.XXL],
    borderWidth: Dimensions[SIZES.XS],
    justifyContent: 'center',
    marginTop: Dimensions[SIZES.L],
    backgroundColor: Colors[VARIANTS.PRIMARY_BG],
    borderColor: Colors[VARIANTS.SECONDARY_TX],
    borderRadius: Dimensions[SIZES.L],
    color: Colors[VARIANTS.PRIMARY_TX],
    fontSize: Dimensions[SIZES.L],
  },
});
