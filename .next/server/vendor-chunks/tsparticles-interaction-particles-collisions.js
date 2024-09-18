"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-particles-collisions";
exports.ids = ["vendor-chunks/tsparticles-interaction-particles-collisions"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Absorb.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/Absorb.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.absorb = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nfunction updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {\n    const factor = (0, tsparticles_engine_1.clamp)((p1.options.collisions.absorb.speed * delta.factor) / 10, 0, r2);\n    p1.size.value += factor / 2;\n    p2.size.value -= factor;\n    if (r2 <= pixelRatio) {\n        p2.size.value = 0;\n        p2.destroy();\n    }\n}\nfunction absorb(p1, p2, delta, pixelRatio) {\n    const r1 = p1.getRadius(), r2 = p2.getRadius();\n    if (r1 === undefined && r2 !== undefined) {\n        p1.destroy();\n    }\n    else if (r1 !== undefined && r2 === undefined) {\n        p2.destroy();\n    }\n    else if (r1 !== undefined && r2 !== undefined) {\n        if (r1 >= r2) {\n            updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);\n        }\n        else {\n            updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);\n        }\n    }\n}\nexports.absorb = absorb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0Fic29yYi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN0cm9zaXRlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLXBhcnRpY2xlcy1jb2xsaXNpb25zL2Nqcy9BYnNvcmIuanM/YjdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWJzb3JiID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuZnVuY3Rpb24gdXBkYXRlQWJzb3JiKHAxLCByMSwgcDIsIHIyLCBkZWx0YSwgcGl4ZWxSYXRpbykge1xuICAgIGNvbnN0IGZhY3RvciA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jbGFtcCkoKHAxLm9wdGlvbnMuY29sbGlzaW9ucy5hYnNvcmIuc3BlZWQgKiBkZWx0YS5mYWN0b3IpIC8gMTAsIDAsIHIyKTtcbiAgICBwMS5zaXplLnZhbHVlICs9IGZhY3RvciAvIDI7XG4gICAgcDIuc2l6ZS52YWx1ZSAtPSBmYWN0b3I7XG4gICAgaWYgKHIyIDw9IHBpeGVsUmF0aW8pIHtcbiAgICAgICAgcDIuc2l6ZS52YWx1ZSA9IDA7XG4gICAgICAgIHAyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhYnNvcmIocDEsIHAyLCBkZWx0YSwgcGl4ZWxSYXRpbykge1xuICAgIGNvbnN0IHIxID0gcDEuZ2V0UmFkaXVzKCksIHIyID0gcDIuZ2V0UmFkaXVzKCk7XG4gICAgaWYgKHIxID09PSB1bmRlZmluZWQgJiYgcjIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwMS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHIxICE9PSB1bmRlZmluZWQgJiYgcjIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwMi5kZXN0cm95KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHIxICE9PSB1bmRlZmluZWQgJiYgcjIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocjEgPj0gcjIpIHtcbiAgICAgICAgICAgIHVwZGF0ZUFic29yYihwMSwgcjEsIHAyLCByMiwgZGVsdGEsIHBpeGVsUmF0aW8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlQWJzb3JiKHAyLCByMiwgcDEsIHIxLCBkZWx0YSwgcGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmFic29yYiA9IGFic29yYjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Absorb.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Bounce.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/Bounce.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.bounce = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst fixBounceSpeed = (p) => {\n    if (p.collisionMaxSpeed === undefined) {\n        p.collisionMaxSpeed = (0, tsparticles_engine_1.getRangeValue)(p.options.collisions.maxSpeed);\n    }\n    if (p.velocity.length > p.collisionMaxSpeed) {\n        p.velocity.length = p.collisionMaxSpeed;\n    }\n};\nfunction bounce(p1, p2) {\n    (0, tsparticles_engine_1.circleBounce)((0, tsparticles_engine_1.circleBounceDataFromParticle)(p1), (0, tsparticles_engine_1.circleBounceDataFromParticle)(p2));\n    fixBounceSpeed(p1);\n    fixBounceSpeed(p2);\n}\nexports.bounce = bounce;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0JvdW5jZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzdHJvc2l0ZS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1wYXJ0aWNsZXMtY29sbGlzaW9ucy9janMvQm91bmNlLmpzP2ZiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJvdW5jZSA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNvbnN0IGZpeEJvdW5jZVNwZWVkID0gKHApID0+IHtcbiAgICBpZiAocC5jb2xsaXNpb25NYXhTcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAuY29sbGlzaW9uTWF4U3BlZWQgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkocC5vcHRpb25zLmNvbGxpc2lvbnMubWF4U3BlZWQpO1xuICAgIH1cbiAgICBpZiAocC52ZWxvY2l0eS5sZW5ndGggPiBwLmNvbGxpc2lvbk1heFNwZWVkKSB7XG4gICAgICAgIHAudmVsb2NpdHkubGVuZ3RoID0gcC5jb2xsaXNpb25NYXhTcGVlZDtcbiAgICB9XG59O1xuZnVuY3Rpb24gYm91bmNlKHAxLCBwMikge1xuICAgICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jaXJjbGVCb3VuY2UpKCgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jaXJjbGVCb3VuY2VEYXRhRnJvbVBhcnRpY2xlKShwMSksICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5jaXJjbGVCb3VuY2VEYXRhRnJvbVBhcnRpY2xlKShwMikpO1xuICAgIGZpeEJvdW5jZVNwZWVkKHAxKTtcbiAgICBmaXhCb3VuY2VTcGVlZChwMik7XG59XG5leHBvcnRzLmJvdW5jZSA9IGJvdW5jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Bounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Collider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/Collider.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Collider = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst ResolveCollision_1 = __webpack_require__(/*! ./ResolveCollision */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/ResolveCollision.js\");\nclass Collider extends tsparticles_engine_1.ParticlesInteractorBase {\n    constructor(container) {\n        super(container);\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact(p1, delta) {\n        if (p1.destroyed || p1.spawning) {\n            return;\n        }\n        const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);\n        for (const p2 of query) {\n            if (p1 === p2 ||\n                !p2.options.collisions.enable ||\n                p1.options.collisions.mode !== p2.options.collisions.mode ||\n                p2.destroyed ||\n                p2.spawning) {\n                continue;\n            }\n            const pos2 = p2.getPosition(), radius2 = p2.getRadius();\n            if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {\n                continue;\n            }\n            const dist = (0, tsparticles_engine_1.getDistance)(pos1, pos2), distP = radius1 + radius2;\n            if (dist > distP) {\n                continue;\n            }\n            (0, ResolveCollision_1.resolveCollision)(p1, p2, delta, container.retina.pixelRatio);\n        }\n    }\n    isEnabled(particle) {\n        return particle.options.collisions.enable;\n    }\n    reset() {\n    }\n}\nexports.Collider = Collider;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0NvbGxpZGVyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQiw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQsMkJBQTJCLG1CQUFPLENBQUMscUhBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Ryb3NpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0NvbGxpZGVyLmpzP2Q0MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbGxpZGVyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgUmVzb2x2ZUNvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4vUmVzb2x2ZUNvbGxpc2lvblwiKTtcbmNsYXNzIENvbGxpZGVyIGV4dGVuZHMgdHNwYXJ0aWNsZXNfZW5naW5lXzEuUGFydGljbGVzSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QocDEsIGRlbHRhKSB7XG4gICAgICAgIGlmIChwMS5kZXN0cm95ZWQgfHwgcDEuc3Bhd25pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcG9zMSA9IHAxLmdldFBvc2l0aW9uKCksIHJhZGl1czEgPSBwMS5nZXRSYWRpdXMoKSwgcXVlcnkgPSBjb250YWluZXIucGFydGljbGVzLnF1YWRUcmVlLnF1ZXJ5Q2lyY2xlKHBvczEsIHJhZGl1czEgKiAyKTtcbiAgICAgICAgZm9yIChjb25zdCBwMiBvZiBxdWVyeSkge1xuICAgICAgICAgICAgaWYgKHAxID09PSBwMiB8fFxuICAgICAgICAgICAgICAgICFwMi5vcHRpb25zLmNvbGxpc2lvbnMuZW5hYmxlIHx8XG4gICAgICAgICAgICAgICAgcDEub3B0aW9ucy5jb2xsaXNpb25zLm1vZGUgIT09IHAyLm9wdGlvbnMuY29sbGlzaW9ucy5tb2RlIHx8XG4gICAgICAgICAgICAgICAgcDIuZGVzdHJveWVkIHx8XG4gICAgICAgICAgICAgICAgcDIuc3Bhd25pbmcpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBvczIgPSBwMi5nZXRQb3NpdGlvbigpLCByYWRpdXMyID0gcDIuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoTWF0aC5yb3VuZChwb3MxLnopIC0gTWF0aC5yb3VuZChwb3MyLnopKSA+IHJhZGl1czEgKyByYWRpdXMyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldERpc3RhbmNlKShwb3MxLCBwb3MyKSwgZGlzdFAgPSByYWRpdXMxICsgcmFkaXVzMjtcbiAgICAgICAgICAgIGlmIChkaXN0ID4gZGlzdFApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICgwLCBSZXNvbHZlQ29sbGlzaW9uXzEucmVzb2x2ZUNvbGxpc2lvbikocDEsIHAyLCBkZWx0YSwgY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0VuYWJsZWQocGFydGljbGUpIHtcbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlLm9wdGlvbnMuY29sbGlzaW9ucy5lbmFibGU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Collider.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Destroy.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/Destroy.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.destroy = void 0;\nconst Bounce_1 = __webpack_require__(/*! ./Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Bounce.js\");\nfunction destroy(p1, p2) {\n    if (!p1.unbreakable && !p2.unbreakable) {\n        (0, Bounce_1.bounce)(p1, p2);\n    }\n    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {\n        p1.destroy();\n    }\n    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {\n        p2.destroy();\n    }\n    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {\n        const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;\n        deleteP.destroy();\n    }\n}\nexports.destroy = destroy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0Rlc3Ryb3kuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Ryb3NpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL0Rlc3Ryb3kuanM/Y2YyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVzdHJveSA9IHZvaWQgMDtcbmNvbnN0IEJvdW5jZV8xID0gcmVxdWlyZShcIi4vQm91bmNlXCIpO1xuZnVuY3Rpb24gZGVzdHJveShwMSwgcDIpIHtcbiAgICBpZiAoIXAxLnVuYnJlYWthYmxlICYmICFwMi51bmJyZWFrYWJsZSkge1xuICAgICAgICAoMCwgQm91bmNlXzEuYm91bmNlKShwMSwgcDIpO1xuICAgIH1cbiAgICBpZiAocDEuZ2V0UmFkaXVzKCkgPT09IHVuZGVmaW5lZCAmJiBwMi5nZXRSYWRpdXMoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAxLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDEuZ2V0UmFkaXVzKCkgIT09IHVuZGVmaW5lZCAmJiBwMi5nZXRSYWRpdXMoKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDEuZ2V0UmFkaXVzKCkgIT09IHVuZGVmaW5lZCAmJiBwMi5nZXRSYWRpdXMoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVAgPSBwMS5nZXRSYWRpdXMoKSA+PSBwMi5nZXRSYWRpdXMoKSA/IHAyIDogcDE7XG4gICAgICAgIGRlbGV0ZVAuZGVzdHJveSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVzdHJveSA9IGRlc3Ryb3k7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Destroy.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/ResolveCollision.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/ResolveCollision.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.resolveCollision = void 0;\nconst Absorb_1 = __webpack_require__(/*! ./Absorb */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Absorb.js\");\nconst Bounce_1 = __webpack_require__(/*! ./Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Bounce.js\");\nconst Destroy_1 = __webpack_require__(/*! ./Destroy */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Destroy.js\");\nfunction resolveCollision(p1, p2, delta, pixelRatio) {\n    switch (p1.options.collisions.mode) {\n        case \"absorb\": {\n            (0, Absorb_1.absorb)(p1, p2, delta, pixelRatio);\n            break;\n        }\n        case \"bounce\": {\n            (0, Bounce_1.bounce)(p1, p2);\n            break;\n        }\n        case \"destroy\": {\n            (0, Destroy_1.destroy)(p1, p2);\n            break;\n        }\n    }\n}\nexports.resolveCollision = resolveCollision;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL1Jlc29sdmVDb2xsaXNpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFVO0FBQ25DLGlCQUFpQixtQkFBTyxDQUFDLGlHQUFVO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLG1HQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN0cm9zaXRlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLXBhcnRpY2xlcy1jb2xsaXNpb25zL2Nqcy9SZXNvbHZlQ29sbGlzaW9uLmpzPzMwMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlc29sdmVDb2xsaXNpb24gPSB2b2lkIDA7XG5jb25zdCBBYnNvcmJfMSA9IHJlcXVpcmUoXCIuL0Fic29yYlwiKTtcbmNvbnN0IEJvdW5jZV8xID0gcmVxdWlyZShcIi4vQm91bmNlXCIpO1xuY29uc3QgRGVzdHJveV8xID0gcmVxdWlyZShcIi4vRGVzdHJveVwiKTtcbmZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb24ocDEsIHAyLCBkZWx0YSwgcGl4ZWxSYXRpbykge1xuICAgIHN3aXRjaCAocDEub3B0aW9ucy5jb2xsaXNpb25zLm1vZGUpIHtcbiAgICAgICAgY2FzZSBcImFic29yYlwiOiB7XG4gICAgICAgICAgICAoMCwgQWJzb3JiXzEuYWJzb3JiKShwMSwgcDIsIGRlbHRhLCBwaXhlbFJhdGlvKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJib3VuY2VcIjoge1xuICAgICAgICAgICAgKDAsIEJvdW5jZV8xLmJvdW5jZSkocDEsIHAyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgICgwLCBEZXN0cm95XzEuZGVzdHJveSkocDEsIHAyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5yZXNvbHZlQ29sbGlzaW9uID0gcmVzb2x2ZUNvbGxpc2lvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/ResolveCollision.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-particles-collisions/cjs/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadParticlesCollisionsInteraction = void 0;\nconst Collider_1 = __webpack_require__(/*! ./Collider */ \"(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/Collider.js\");\nasync function loadParticlesCollisionsInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"particlesCollisions\", (container) => new Collider_1.Collider(container), refresh);\n}\nexports.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBDQUEwQztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxR0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Ryb3NpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tcGFydGljbGVzLWNvbGxpc2lvbnMvY2pzL2luZGV4LmpzPzhkMjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRQYXJ0aWNsZXNDb2xsaXNpb25zSW50ZXJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBDb2xsaWRlcl8xID0gcmVxdWlyZShcIi4vQ29sbGlkZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkUGFydGljbGVzQ29sbGlzaW9uc0ludGVyYWN0aW9uKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkSW50ZXJhY3RvcihcInBhcnRpY2xlc0NvbGxpc2lvbnNcIiwgKGNvbnRhaW5lcikgPT4gbmV3IENvbGxpZGVyXzEuQ29sbGlkZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRQYXJ0aWNsZXNDb2xsaXNpb25zSW50ZXJhY3Rpb24gPSBsb2FkUGFydGljbGVzQ29sbGlzaW9uc0ludGVyYWN0aW9uO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-particles-collisions/cjs/index.js\n");

/***/ })

};
;