import highlight from './highlight';
import { refractor } from 'refractor';

const SyntaxHighlighter = highlight(refractor, {});
SyntaxHighlighter.registerLanguage = (_, language) =>
  refractor.register(language);

export default SyntaxHighlighter;
