import { event } from "vue-gtag";

export function clickEvent(name: string, category: string, label: string, value: number): void {
    event(name, { event_category: category, event_label: label, event_value: value });
}