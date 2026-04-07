import type { Request, Response } from "express";
export declare const createGame: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const submitGuess: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
type GameParams = {
    id: string;
};
export declare const getResults: (req: Request<GameParams>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=game.controller.d.ts.map