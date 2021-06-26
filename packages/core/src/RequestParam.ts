import { ROUTES_METADATA_KEY } from "./GetRequest";


function RequestParam(parameterName?: string): Function {
    return function(target, methodName, paramterIndex) {
        const existingRoutes =  Reflect.getMetadata(
                ROUTES_METADATA_KEY,
                target,
            ) || [];
        
        const indexOfThisRoute = existingRoutes.findIndex(({ command }) => command === methodName);

        if (indexOfThisRoute > 0) {
            // todo if already exists .. this should not be reached, I think
        }
      const newRoutes = [...existingRoutes, {
          params: [{
              parameterName,
              paramterIndex,
          }],
          command: methodName,
      }]

      Reflect.defineMetadata(
        ROUTES_METADATA_KEY,
        newRoutes,
        target
    );


        console.log('Route ' + methodName + ' at ' + indexOfThisRoute + ' has ' + parameterName + ' param at index ' +  paramterIndex);
        const functionBeforeModification = Reflect.get(target, methodName);
        // const newFunction = () => {

        // }
        console.log('request params are ', functionBeforeModification.args);
    }
}

export default RequestParam;