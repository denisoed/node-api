const Widget = require('../db/models/widget');

exports.addWidget = ({ title, description, html }) => new Promise(async (resolve, reject) => {
  try {
    if (!title) {
      resolve({
        success: false,
        message: 'title is required'
      });
      return false;
    }

    const newWidget = new Widget({
      title,
      description,
      html
    });

    const widget = await newWidget.save();

    resolve({
      success: true,
      data: widget
    });
  } catch (error) {
    reject(error);
  };
});

exports.getWidget = ({ id }) => new Promise(async (resolve, reject) => {
  try {
    if (!id) {
      resolve({
        success: false,
        message: 'id is required'
      });
      return false;
    }

    const widget = await Widget.findById(id);

    resolve({
      success: true,
      data: widget
    });
  } catch (error) {
    reject(error);
  };
});
