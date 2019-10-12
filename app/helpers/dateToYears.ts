import moment from "moment";

export default function dateToYears(date: string) {
  return moment().diff(date, "years");
}
