const { Service } = require('feathers-nedb');
var uuid = require('uuid-random');

exports.Project = class Project extends Service {
  create(data, params) {

    // making the id of the project
    const ref = uuid();

    const projectData = {
      ...data,
      states: [],
      ref,
    };

    return super.create(projectData, params);
  }
  find(params) {
    
    const { user, query } = params;
    const newQuery = {
      ...query,
      $or: [
        { createdBy: user._id},
        { 
          createdBy: {
            $ne: user._id
          },
          isPrivate: false
        }
      ],
    };

    params.query = {
      ...newQuery
    };
    
    return super.find(params);
  }
};
