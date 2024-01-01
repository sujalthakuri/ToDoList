import Realm from 'realm';

class Schema extends Realm.Object {}
Schema.schema = {
  name: 'Schema',
  properties: {
    id: 'int',
    task_name: 'string',
    isCompleted: 'bool',
  },
};

export default Schema;
