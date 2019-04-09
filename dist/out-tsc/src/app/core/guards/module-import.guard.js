export function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import.guard.js.map