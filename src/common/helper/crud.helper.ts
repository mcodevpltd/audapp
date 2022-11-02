import { CrudGlobalConfig } from "@nestjsx/crud";


export const crudGlobalOptions: CrudGlobalConfig = {
  query: {
    limit: 10,
    maxLimit: 20,
    cache: 2000 || false,
    alwaysPaginate: true,
    softDelete: true
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    updateOneBase: {
      allowParamsOverride: true,
    },
    deleteOneBase: {
      returnDeleted: true,
    
    },
    
  },
 

}