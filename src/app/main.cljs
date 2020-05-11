(ns app.main
  (:require
    [goog.dom :as gdom]
    [goog.object :as gobj]
    #_[reagent.core :as r]
    [hx.react :as hx :refer [defnc]]
    [hx.hooks :as hooks]
    [react-dom :as react-dom]
    ["react-dnd-cjs" :as dnd]
    ["react-dnd-html5-backend" :as html5-backend]))

(comment
  (def players [:WHITE :BLACK])

  (prn html5-backend/createBackend)

  (defnc
    Field
    [{:keys [k
             piece-on-field
             on-click]
      :as   state}]
    (let [[collectedProps, drag] (dnd/useDrag #js {:item    #js {:id   (str k)
                                                                 :type "field"}
                                                   :collect (fn [monitor]
                                                              #js {:isDragging (.isDragging monitor)})})
          [collectedPropsFromDrop, dragFromDrop] (dnd/useDrop #js {:accept "field"})]
      #_(prn collectedProps)
      #_(prn drag)
      (prn collectedProps)
      [:div {:class    "field"
             :key      k
             :on-click on-click}
       [:div {:class ["piece" (case piece-on-field
                                :BLACK "blackPiece"
                                :WHITE "whitePiece"
                                :_____ nil)]}]]))

  (defn put-piece [index {:keys [current-player] :as state}]
    (-> state
        (update :board #(assoc % index current-player))
        (update-in [:players current-player :unplayed-pieces] dec)
        (update :current-player (fn [player]
                                  (case player
                                    :BLACK :WHITE
                                    :WHITE :BLACK)))))

  (js/console.log dnd/DndProvider)
  (prn dnd/DndProvider)


  (defnc
    MyBoard
    [state]
    (let [[state update-state] (hooks/useState state)]
      [dnd/DndProvider
       {:backend (gobj/get html5-backend "default")}
       [:div
        [:div (str "Current player: " (-> state :current-player))]
        [:div (str "Black pieces left: " (-> state :players :BLACK :unplayed-pieces))]
        [:div (str "White pieces left: " (-> state :players :WHITE :unplayed-pieces))]
        [:div {:class "gameBoard"}
         (->> (range 16)
              (map (fn [i]
                     [Field {:k              i
                             :piece-on-field (-> state :board (get i))
                             :on-click       #(update-state (put-piece i state))}]))
              doall)]]]))

  (defnc
    MyComponent
    [state]
    [MyBoard state])

  (defn ^:after-load on-reload []
    (react-dom/render
      ;; hx/f transforms Hiccup into a React element.
      ;; We only have to use it when we want to use hiccup outside of `defnc` / `defcomponent`
      (hx/f [MyComponent {:board          [:_____ :_____ :_____ :_____
                                           :_____ :_____ :_____ :_____
                                           :_____ :_____ :_____ :_____
                                           :_____ :_____ :_____ :_____]
                          :current-player (rand-nth players)
                          :players        {:BLACK {:unplayed-pieces 5}
                                           :WHITE {:unplayed-pieces 5}}}])
      (. js/document getElementById "app"))))


(defnc
  Knight []
  (let [[{:keys [isDragging]}, drag] (dnd/useDrag #js {:item    #js {:type "knight"}
                                                       :collect (fn [monitor]
                                                                  #js {:isDragging (monitor.isDragging)})})]
    [:div
     {:ref   drag
      :style {:opacity     (if isDragging
                             0.5
                             1)
              :font-size   50
              :font-weight "bold"
              :cursor      "move"}}
     "♘"]))

(defnc
  Square [{:keys [black
                  children]}]
  [:div {:style {:width            "100%"
                 :height           "100%"
                 :background-color (if black
                                     "black"
                                     "white")
                 :color            (if black
                                     "white"
                                     "black")}}
   children])

(defnc
  BoardSquare
  [{:keys [position
           moveKnight
           children]}]
  (let [[{:keys [isOver]} drop] (dnd/useDrop #js {:accept  "knight"
                                                  :drop    (fn []
                                                             (moveKnight position))
                                                  :collect (fn [monitor]
                                                             (when (monitor.isOver)
                                                               (prn "it's true!")) ;; always false for some reason
                                                             #js {:isOver (monitor.isOver)})})
        black (odd? (apply + position))]
    [:div {:ref   drop
           :style {:position "relative"
                   :width    "100%"
                   :height   "100%"}}
     [Square {:black black}
      children]
     (when isOver
       [:div {:style {:position         "absolute"
                      :top              0
                      :left             0
                      :height           "100%"
                      :width            "100%"
                      :z-index          1
                      :opacity          0.5
                      :background-color "yellow"}}])]))

(defnc
  renderPiece [{:keys [position knightPosition]}]
  (if (= position knightPosition)
    [Knight]
    [:span {:style {:visibility "hidden"}} "empty"]))

(defnc
  renderSquare [{:keys [moveKnight
                        i
                        knightPosition]}]
  (let [x (rem i 8)
        y (js/Math.floor (/ i 8))]
    [:div {:key   i
           :style {:width  "12.5%"
                   :height "12.5%"}}
     [BoardSquare {:position   [x y]
                   :moveKnight moveKnight}
      [renderPiece {:position       [x y]
                    :knightPosition knightPosition}]]]))

(defnc
  Board [state]
  [dnd/DndProvider
   {:backend (gobj/get html5-backend "default")}
   (let [[state, update-state] (hooks/useState state)]
     (let [squares (for [i (range 64)]
                     [renderSquare {:i              i
                                    :knightPosition (:knightPosition state)
                                    :moveKnight     (fn [position]
                                                      (update-state (assoc state
                                                                      :knightPosition position)))}])]
       [:div {:style {:width          "500px"
                      :height         "500px"
                      :display        "flex"
                      :flex-direction "row"
                      :flex-wrap      "wrap"}}
        squares]))])



(defn ^:dev/after-load on-reload []
  (react-dom/render
    ;; hx/f transforms Hiccup into a React element.
    ;; We only have to use it when we want to use hiccup outside of `defnc` / `defcomponent`
    (hx/f [Board {:knightPosition [0 0]}])
    (. js/document getElementById "app")))

(defn ^:export init
  []
  (on-reload))