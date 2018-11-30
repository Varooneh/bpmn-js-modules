import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import inherits from 'inherits';

export default function resizeElement(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(resizeElement, RuleProvider);

resizeElement.$inject = [ 'eventBus' ];

resizeElement.prototype.init = function() {
  this.addRule('shape.resize', 1500, function() {
    return true;
  });
};