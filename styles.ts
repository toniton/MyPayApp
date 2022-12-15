import {StyleSheet} from 'react-native';

export enum SIZES {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  X = 'X',
  XL = 'XL',
  XXL = 'XXL',
}

export const Dimensions = {
  [SIZES.XS]: 2,
  [SIZES.S]: 8,
  [SIZES.M]: 14,
  [SIZES.L]: 18,
  [SIZES.XL]: 32,
  [SIZES.XXL]: 64,
};

export enum VARIANTS {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  SURFACE_BG = 'SURFACE_BG',
  SURFACE_TX = 'SURFACE_TX',
  PRIMARY_BG = 'PRIMARY_BG',
  PRIMARY_TX = 'PRIMARY_TX',
  SECONDARY_BG = 'SECONDARY_BG',
  SECONDARY_TX = 'SECONDARY_TX',
}

export const Colors = {
  [VARIANTS.WHITE]: '#FFFFFF',
  [VARIANTS.BLACK]: '#000000',
  [VARIANTS.SURFACE_BG]: '#F4F4F4',
  [VARIANTS.SURFACE_TX]: '#353535',
  [VARIANTS.PRIMARY_BG]: '#000000',
  [VARIANTS.PRIMARY_TX]: '#FAFAFA',
  [VARIANTS.SECONDARY_TX]: '#70757a',
  [VARIANTS.SECONDARY_BG]: '#d0d7de',
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
  curved: {
    borderTopStartRadius: Dimensions[SIZES.XL],
    borderTopEndRadius: Dimensions[SIZES.XL],
  },
  container: {
    paddingVertical: Dimensions[SIZES.L],
    paddingHorizontal: Dimensions[SIZES.XL],
    justifyContent: 'center',
    backgroundColor: Colors[VARIANTS.SURFACE_BG],
  },
  content: {
    padding: Dimensions[SIZES.L],
  },
  none: {
    padding: 0,
    margin: 0,
  },
  sheet: {
    backgroundColor: Colors[VARIANTS.WHITE],
  },
  section: {
    marginTop: Dimensions[SIZES.L],
  },
  list: {
    marginTop: Dimensions[SIZES.M],
  },
  listItem: {
    paddingVertical: Dimensions[SIZES.L],
    paddingHorizontal: Dimensions[SIZES.L],
    borderBottomWidth: 1,
    borderColor: Colors[VARIANTS.SECONDARY_BG],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemContent: {
    marginEnd: Dimensions[SIZES.L],
  },
  listItemTrailing: {
    flexBasis: 'auto',
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
  body: {
    color: Colors[VARIANTS.SURFACE_TX],
    fontSize: Dimensions[SIZES.L],
    marginBottom: Dimensions[SIZES.M],
  },
  bold: {
    fontWeight: '700',
  },
  small: {
    fontSize: Dimensions[SIZES.M],
    fontWeight: '400',
  },
  rightAlign: {
    alignContent: 'flex-end',
    textAlign: 'right',
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
