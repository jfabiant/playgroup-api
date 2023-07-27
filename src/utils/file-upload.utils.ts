import { extname } from "path";

export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const currentDate = new Date();
    const fullDate = `${currentDate.getDay()}${(currentDate.getMonth()+1)}${currentDate.getFullYear()}${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}`;
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${fullDate}-${randomName}${fileExtName}`);
  };
