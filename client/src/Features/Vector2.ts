export class Vector2{
    public static get Zero(): Vector2{
        return new Vector2(0,0);
    }
    public static get One(): Vector2{
        return new Vector2(1,1);
    }
    public x: number = 0;
    public y: number = 0;
    public constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }
    public static FromArray = (a: number[]): Vector2 => new Vector2(a[0], a[1])
    public static Create = (x: number, y: number) => new Vector2(x,y,);
    public static Add = (a: Vector2, b: Vector2): Vector2 => new Vector2(a.x + b.x, a.y + b.y);
    public static AddX = (a: Vector2, b: number): Vector2 => new Vector2(a.x + b, a.y);
    public static AddY = (a: Vector2, b: number): Vector2 => new Vector2(a.x, a.y + b);
    public static AddXY = (a: Vector2, b: number, c: number): Vector2 => new Vector2(a.x + b, a.y + c);
    public static Divide = (a: Vector2, b: Vector2): Vector2 => new Vector2(a.x / b.x, a.y / b.y);
    public static Multiply = (a: Vector2, b: Vector2): Vector2 => new Vector2(a.x * b.x, a.y * b.y);
    public static MultiplyNumber = (a: Vector2, b: number): Vector2 => new Vector2(a.x * b, a.y * b);
    public static Subtract = (a: Vector2, b: Vector2): Vector2 => new Vector2(a.x - b.x, a.y - b.y);
    public static Dot = (a: Vector2, b: Vector2): number => (Math.atan2(b.y, b.x) - Math.atan2(a.y,a.x)) * 180 / Math.PI;
    public abs = (): Vector2 => new Vector2(Math.abs(this.x), Math.abs(this.y));
    public equals = (b: Vector2) =>  this.x == b.x && this.y == b.y;
    public addX = (a: number): number => this.x += a;
    public addY = (a: number): number => this.y += a;
    public add(a: Vector2): Vector2{
        this.x += a.x;
        this.y += a.y;
        return this;
    }
    public get length(): number {return Math.sqrt(this.x * this.x + this.y * this.y)};
    public normalize = (): Vector2 => new Vector2(this.x / this.length, this.y / this.length);
    public toArray = () => [this.x, this.y];
}