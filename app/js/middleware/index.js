export const actionReporter = store => next => action => {
    console.info(`Dispatching: ${action.type}`);
    return next(action);
}

export const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (e) {
        console.error(`Action '${action && action.type}' threw an exception`);
        throw e;
    }
}
