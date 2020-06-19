export const averagePh = ph => {
  let phAverage = 0;
  for (let key in ph) {
    phAverage += ph[key];
  }
  return (phAverage / (Object.keys(ph).length * 10)).toPrecision(3);
};

export const createDateFromString = date => {
  return new Date(date);
};

export const createEmptyDateError = (firstdate, lastdate) => {
  if (firstdate === '' || lastdate === '') {
    return { error: 'Empty Date Field Error' };
  }
};

export const isDateNegative = (firstdate, lastdate) => {
  return new Date(firstdate) - new Date(lastdate) >= 0;
};

export const createDateFromNow = day => {
  return new Date(new Date().setDate(new Date().getDate() + parseInt(day)))
    .toISOString()
    .slice(0, 10);
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getListOfFiles = arrayOfFiles => {
  return arrayOfFiles.map(file => (
    <li key={file.path} className="list-group-item d-flex justify-content-between">
      <span>{`${file.path} - ${file.size} bytes!`}</span>
      {(file.size > MAX_FILE_SIZE_UPLOAD) 
        ? <span className="text-danger">{exportMessages.FILE_TO_LARGE}</span> 
        : <span className="text-danger">{exportMessages.INVALID_DATA_TYPE}</span>}
    </li>
  ));
}

export const getBase64 = file => {
  const arr = [];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => { arr.push(reader.result)};
  return arr;
}

export const convertDataURLToFile = (dataurl, filename) => {
  try {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  } catch (err) {
    return err;
  }
};