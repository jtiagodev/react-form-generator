// import React from "react";
// import Typography from "@ui-lib/core/Typography";
// import { styles, ComponentName } from "./CountdownStyles";
// import { withStyles } from "@material-uicore/styles";
// //import { FINANCIAL_DOCUMENT_STATUS } from "../../../constants";

// export const ComponentName = "Countdown";
// export const styles = (theme) => ({
//   dateDiffAbove: {
//     display: "flex",
//     alignSelf: "center",
//     color: theme.palette.common.white,
//     backgroundColor: "#E79208",
//     padding: `0px ${theme.spacing.unit}px`,
//     borderRadius: theme.spacing.unit * 3,
//     position: "absolute",
//     left: theme.spacing.unit * 10 + 10,
//     top: theme.spacing.unit * 3,
//   },
//   dateDiffBelow: {
//     display: "flex",
//     alignSelf: "center",
//     color: theme.palette.common.white,
//     backgroundColor: "#D92727",
//     padding: `0px ${theme.spacing.unit}px`,
//     borderRadius: theme.spacing.unit * 3,
//     position: "absolute",
//     left: theme.spacing.unit * 10 + 10,
//     top: theme.spacing.unit * 3,
//   },
// });


// //TODO: check status
// //const CountdownRender = ({ classes, dateToCompare, i18nProvider, status }) => {
// const CountdownRender = ({ classes, dateToCompare, i18nProvider }) => {
//   const actualDate = new Date();
//   const compareDate = new Date(dateToCompare);
//   //Convert to UTC
//   const actualDateUTC = Date.UTC(
//     actualDate.getFullYear(),
//     actualDate.getMonth(),
//     actualDate.getDate()
//   );
//   const compareDateUTC = Date.UTC(
//     compareDate.getFullYear(),
//     compareDate.getMonth(),
//     compareDate.getDate()
//   );

//   const diffTime = compareDateUTC - actualDateUTC;
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   //TODO: check status
//   //if (diffDays > 7 || status !== FINANCIAL_DOCUMENT_STATUS.IN_APPROVAL) {
//   if (diffDays > 7) {
//     return <React.Fragment />;
//   } else if (diffDays >= 0) {
//     return (
//       <Typography
//         variant="h6"
//         className={classes.dateDiffAbove}
//       >{`${"+"} ${Math.abs(diffDays)} ${i18nProvider.Texti18n(
//         "countdown.days"
//       )}`}</Typography>
//     );
//   } else if (diffDays < 0) {
//     return (
//       <Typography
//         variant="h6"
//         className={classes.dateDiffBelow}
//       >{`${"-"} ${Math.abs(diffDays)} ${i18nProvider.Texti18n(
//         "countdown.days"
//       )}`}</Typography>
//     );
//   }
// };

// export default withStyles(styles, { name: ComponentName })(CountdownRender);
