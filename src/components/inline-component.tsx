import { ReactNode } from "react";

/**
 * This component accept a function as children and render it as component.
 */
export default function InlineComponent({
  children
}: {
  children: () => ReactNode;
}) {
  return children();
}

/**
 *
 * Example of use:
 *
 *        <InlineComponent>
 *           {() => {
 *             const [number, setNumber] = useState(0);
 *
 *             return (
 *               <div>
 *                  {
 *                      number
 *                    }
 *               </div>
 *             );
 *           }}
 *         </InlineComponent>
 *
 */
