import * as moment from 'moment'

let helpers = {
	safeGet: function (object, keys) {
        return keys.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : undefined, object) || '';
    },
    formatDateTime: function (date_string, format_string) {
        if (!date_string || !format_string) return '';
        let date = moment(date_string);
        return date.isValid() ? date.format(format_string) : '';
    },
    formatCurrency: function (val) {
        return new Intl.NumberFormat('ja-JP').format(val);
    },
    parseDateTime: function (date_string, in_format, out_format) {
        if (!date_string || !in_format) return '';
        let date = moment(date_string, in_format);
        if(out_format) {
            return date.isValid() ? date.format(out_format) : '';
        }
        return date.isValid() ? date : '';
    },
}

export default helpers;
