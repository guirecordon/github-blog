import moment from 'moment';

export function dateRelativeToNow(date: string) {
  return moment(date).fromNow()
}


