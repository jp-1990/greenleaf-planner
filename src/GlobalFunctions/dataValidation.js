export default class Validate {
  // input should be a string representation of a date (e.g. html form input)
  static futureDate(input) {
    const output = {
      result: false,
      message: '',
    };

    // must include / to be a valid date
    if (!input.includes('/')) {
      output.message = 'Day, month and year should be seperated with "/"';
      output.result = false;
      return output;
    }

    // must not have more than 3 sections to it
    if (input.split('/').length !== 3) {
      output.message = 'Invalid date format';
      output.result = false;
      return output;
    }

    // store day month and year ready for further checks
    const splitDate = input.split('/').map((el) => +el);

    // confirm each array el is a number
    if (
      Number.isNaN(splitDate[0]) ||
      Number.isNaN(splitDate[1]) ||
      Number.isNaN(splitDate[2])
    ) {
      output.message = 'Date must contain only numbers and "/"';
      output.result = false;
      return output;
    }

    // invalid new date returns NaN, so this checks if the entered date is valid
    if (Number.isNaN(new Date(splitDate[2], splitDate[1] - 1, splitDate[0]))) {
      output.message = 'Provided date is not valid';
      output.result = false;
      return output;
    }

    // check date input makes human sense (e.g. 32/01/2020 is valid as 1/2/2020, but does not make human sense and is likely a typo)
    if (splitDate[0] > new Date(splitDate[2], splitDate[1], 0).getDate()) {
      output.message = 'The given month does not have that many days';
      output.result = false;
      return output;
    }
    if (splitDate[1] - 1 > 11) {
      output.message = 'There are only 12 months in a year';
      output.result = false;
      return output;
    }

    // restrict date to no more than 3 years in the future
    if (splitDate[2] > new Date(Date.now()).getFullYear() + 3) {
      output.message = 'Date should not be more than 3 years in the future';
      output.result = false;
      return output;
    }

    // confirm that date is in the future
    if (
      new Date(splitDate[2], splitDate[1] - 1, splitDate[0] + 1) -
        new Date(Date.now()) <
      0
    ) {
      output.message = 'Date must be in the future';
      output.result = false;
      return output;
    }

    // if validation pipeline is passed, return true
    output.message = 'validated';
    output.result = true;
    return output;
  }
}
