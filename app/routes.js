// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';



const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
     {
      path: 'maindash',
      name: 'maindash',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MainDashContainer/reducer'),
          System.import('containers/MainDashContainer/sagas'),
          System.import('containers/MainDashContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mainDashContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/corporate/sites',
      name: 'sites',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CorporatePartnershipsSitesContainer/reducer'),
          System.import('containers/CorporatePartnershipsSitesContainer/sagas'),
          System.import('containers/CorporatePartnershipsSitesContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {

          injectReducer('corporatePartnershipsSitesContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      }
      , {
      path: '/corporate',
      name: 'corporatePartnershipsMainDashContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CorporatePartnershipsMainDashContainer/reducer'),
          System.import('containers/CorporatePartnershipsMainDashContainer/sagas'),
          System.import('containers/CorporatePartnershipsMainDashContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('corporatePartnershipsMainDashContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/corporate/siteprofit',
      name: 'siteProfitabilityContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SiteProfitabilityContainer/reducer'),
          System.import('containers/SiteProfitabilityContainer/sagas'),
          System.import('containers/SiteProfitabilityContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('siteProfitabilityContainer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}









// {
//   path: '/about',
//   name: 'about',
//   getComponent(nextState, cb) {
//     const importModules = Promise.all([
//       System.import('containers/AboutPage'),
//     ]);

//     const renderRoute = loadModule(cb);

//     importModules.then(([component]) => {
//       renderRoute(component);
//     });

//     importModules.catch(errorLoading);
//   },
//   childRoutes: [
//     {
//       path: '/about/our-team',
//       name: 'team',
//       getComponent(nextState, cb) {
//         const importModules = Promise.all([
//           System.import('containers/TeamPage'),
//         ]);

//         const renderRoute = loadModule(cb);

//         importModules.then(([component]) => {
//           renderRoute(component);
//         });

//         importModules.catch(errorLoading);
//       },
//     },
//   ]
// }