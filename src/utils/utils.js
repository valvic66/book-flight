import moment from 'moment';

function formatDate(date) {
    const [dd, mm, yyyy] = date.split('.');

    return new Date(`${yyyy}-${mm}-${dd}`);
};

export const isRetDateAfterDepDate = (depDate, retDate) => {
    return formatDate(depDate) < formatDate(retDate) ;
};

export const validateDate = (date, setDateValidation, setDate) => {
    const validDate = moment(date, ['DD.MM.YYYY'], true);

    setDateValidation(validDate.isValid());
    setDate(date);
};
