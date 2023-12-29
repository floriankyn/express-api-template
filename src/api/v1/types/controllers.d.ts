import { Request } from 'express';

/**
 * Extends Request to include a token property.
 */
interface AuthenticatedRequest extends Request {
  token?: string | object;
}
