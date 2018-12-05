import ReactReconciler from "react-reconciler";

const hostConfig = {};
const ReactReconcilerInst = ReactReconciler(hostConfig);

export default {
  render: (reactElement, domElement, callback) => {
    console.log(arguments);
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      callback
    );
  }
};
