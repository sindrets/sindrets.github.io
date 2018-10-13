import { Point } from '../maths/Point';
import { Component } from './Component';
import { Particle } from './Particle';
export declare class ParticleCluster extends Component {
    protected stack: Particle[];
    drawParticles: boolean;
    drawConnections: boolean;
    splineTension: number;
    protected connectionDrawStyle: ClusterConnectionStyle;
    protected splinePoints: Point[];
    addParticle(a: number | Particle, y?: number): void;
    disposeStack(): void;
    /**
     * Interpolates cardinal spline points based on particles in stack.
     * @param tension
     * @param isClosed
     * @param numSegments
     */
    private calcSplinePoints;
    private updateDimensions;
    draw(g2: CanvasRenderingContext2D): void;
    tick(): void;
}
export declare enum ClusterConnectionStyle {
    LINES = 0,
    SPLINES = 1,
    CENTER_CURVES = 2
}
