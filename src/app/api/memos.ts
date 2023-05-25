// APIルート用のリクエストとレスポンスの型
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid"; // // UUIDを生成するライブラリ
import { Memo } from "../../app/types";

let memos: Memo[] = []; // メモを格納するための配列を初期化

// APIルートとしてデフォルトエクスポートする関数を定義
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // リクエストによって分岐
  if (req.method === "GET") {
    res.status(200).json(memos); // 現在のすべてのメモを返す
  } else if (req.method === "POST") {
    const memo = {
      // 新しいメモを作成
      id: uuidv4(),
      title: req.body.title,
      content: req.body.content,
    };
    memos.push(memo); // 新しいメモを配列に追加
    res.status(201).json(memo); // 新しく作成されたメモをレスポンスとして返す
  }
}
