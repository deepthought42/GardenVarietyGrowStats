require 'test_helper'

class PlantsControllerTest < ActionController::TestCase
  setup do
    @plant = plants(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:plants)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create plant" do
    assert_difference('Plant.count') do
      post :create, plant: { maxDaysToGerm: @plant.maxDaysToGerm, maxDaysToMaturity: @plant.maxDaysToMaturity, minDaysToGerm: @plant.minDaysToGerm, minDaysToMaturity: @plant.minDaysToMaturity, name: @plant.name }
    end

    assert_redirected_to plant_path(assigns(:plant))
  end

  test "should show plant" do
    get :show, id: @plant
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @plant
    assert_response :success
  end

  test "should update plant" do
    put :update, id: @plant, plant: { maxDaysToGerm: @plant.maxDaysToGerm, maxDaysToMaturity: @plant.maxDaysToMaturity, minDaysToGerm: @plant.minDaysToGerm, minDaysToMaturity: @plant.minDaysToMaturity, name: @plant.name }
    assert_redirected_to plant_path(assigns(:plant))
  end

  test "should destroy plant" do
    assert_difference('Plant.count', -1) do
      delete :destroy, id: @plant
    end

    assert_redirected_to plants_path
  end
end
